'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
  useColorModeValue,
  Spinner,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import { keyframes } from '@emotion/react'

const MotionBox = motion(Box)

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`

const typingAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const MessageBubble = ({ message, isUser }: { message: Message; isUser: boolean }) => {
  const bgColor = useColorModeValue(
    isUser ? 'blue.500' : 'gray.100',
    isUser ? 'blue.400' : 'gray.700'
  )
  const textColor = useColorModeValue(
    isUser ? 'white' : 'gray.800',
    isUser ? 'white' : 'gray.100'
  )

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      p={4}
      borderRadius="xl"
      bg={bgColor}
      color={textColor}
      alignSelf={isUser ? 'flex-end' : 'flex-start'}
      maxW="80%"
      boxShadow="md"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: isUser ? 'auto' : '-8px',
        right: isUser ? '-8px' : 'auto',
        width: '16px',
        height: '16px',
        background: bgColor,
        clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
        transform: isUser ? 'rotate(45deg)' : 'rotate(-45deg)',
      }}
    >
      <Text>{message.content}</Text>
    </MotionBox>
  )
}

const TypingIndicator = () => {
  const dots = [0, 1, 2]
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      p={4}
      borderRadius="xl"
      bg={useColorModeValue('gray.100', 'gray.700')}
      color={useColorModeValue('gray.800', 'gray.100')}
      alignSelf="flex-start"
      maxW="80%"
      display="flex"
      alignItems="center"
      gap={2}
    >
      {dots.map((dot) => (
        <Box
          key={dot}
          w="2"
          h="2"
          borderRadius="full"
          bg={useColorModeValue('gray.400', 'gray.500')}
          animation={`${typingAnimation} 1s infinite ${dot * 0.2}s`}
        />
      ))}
    </MotionBox>
  )
}

export default function Home() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const newMessage: Message = { role: 'user', content: input }
    setMessages((prev: Message[]) => [...prev, newMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, newMessage],
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      setMessages((prev: Message[]) => [...prev, data])
    } catch (error) {
      console.error('Error:', error)
      setMessages((prev: Message[]) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container maxW="container.xl" py={8} minH="100vh" bgGradient="linear(to-b, gray.50, gray.100)" _dark={{ bgGradient: 'linear(to-b, gray.900, gray.800)' }}>
      <VStack spacing={8} align="stretch" h="100vh">
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          AI Agent Platform
        </Heading>
        
        <Box
          borderRadius="2xl"
          borderWidth="1px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          bg={useColorModeValue('white', 'gray.800')}
          p={6}
          flex="1"
          overflowY="auto"
          boxShadow="xl"
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)',
            pointerEvents: 'none',
            borderRadius: 'inherit',
          }}
        >
          <VStack spacing={4} align="stretch">
            <AnimatePresence>
              {messages.map((message: Message, index: number) => (
                <MessageBubble
                  key={index}
                  message={message}
                  isUser={message.role === 'user'}
                />
              ))}
              {isLoading && <TypingIndicator />}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </VStack>
        </Box>

        <form onSubmit={handleSubmit}>
          <InputGroup size="lg">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              borderRadius="full"
              bg={useColorModeValue('white', 'gray.700')}
              borderWidth="2px"
              borderColor={useColorModeValue('gray.200', 'gray.600')}
              _hover={{
                borderColor: useColorModeValue('blue.400', 'blue.300'),
              }}
              _focus={{
                borderColor: 'blue.400',
                boxShadow: '0 0 0 1px var(--chakra-colors-blue-400)',
              }}
              pr="4.5rem"
              isDisabled={isLoading}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                aria-label="Send message"
                icon={<FiSend />}
                colorScheme="blue"
                borderRadius="full"
                size="md"
                type="submit"
                isLoading={isLoading}
                isDisabled={!input.trim() || isLoading}
                _hover={{
                  transform: 'scale(1.05)',
                }}
                transition="all 0.2s"
              />
            </InputRightElement>
          </InputGroup>
        </form>
      </VStack>
    </Container>
  )
} 