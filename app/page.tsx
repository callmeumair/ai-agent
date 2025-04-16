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
} from '@chakra-ui/react'
import { useState } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function Home() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const newMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, newMessage])
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
      setMessages(prev => [...prev, data])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [
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
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          AI Agent Platform
        </Heading>
        
        <Box
          borderRadius="lg"
          borderWidth="1px"
          borderColor={borderColor}
          bg={bgColor}
          p={6}
          minH="60vh"
          maxH="60vh"
          overflowY="auto"
        >
          <VStack spacing={4} align="stretch">
            {messages.map((message, index) => (
              <Box
                key={index}
                p={4}
                borderRadius="md"
                bg={message.role === 'user' ? 'blue.500' : 'gray.700'}
                color="white"
                alignSelf={message.role === 'user' ? 'flex-end' : 'flex-start'}
                maxW="80%"
              >
                <Text>{message.content}</Text>
              </Box>
            ))}
            {isLoading && (
              <Box
                p={4}
                borderRadius="md"
                bg="gray.700"
                color="white"
                alignSelf="flex-start"
                maxW="80%"
              >
                <Spinner size="sm" mr={2} />
                <Text as="span">AI is thinking...</Text>
              </Box>
            )}
          </VStack>
        </Box>

        <form onSubmit={handleSubmit}>
          <Flex gap={4}>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              size="lg"
              isDisabled={isLoading}
            />
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              px={8}
              isLoading={isLoading}
              loadingText="Sending"
            >
              Send
            </Button>
          </Flex>
        </form>
      </VStack>
    </Container>
  )
} 