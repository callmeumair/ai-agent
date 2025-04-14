import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'OpenAI API key is not configured' },
      { status: 500 }
    )
  }

  try {
    const { text, analysisType } = await request.json()

    let prompt = ''
    switch (analysisType) {
      case 'sentiment':
        prompt = `Analyze the sentiment of the following text and provide a score from -1 (very negative) to 1 (very positive):\n\n${text}`
        break
      case 'summary':
        prompt = `Provide a concise summary of the following text:\n\n${text}`
        break
      case 'keywords':
        prompt = `Extract the main keywords from the following text:\n\n${text}`
        break
      default:
        return NextResponse.json(
          { error: 'Invalid analysis type' },
          { status: 400 }
        )
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 500,
    })

    return NextResponse.json({
      result: completion.choices[0].message.content,
      analysisType,
    })
  } catch (error) {
    console.error('Error in text analysis API:', error)
    return NextResponse.json(
      { error: 'Failed to process text analysis request' },
      { status: 500 }
    )
  }
} 