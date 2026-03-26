import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const response = await fetch('https://formsubmit.co/ajax/stwebworks@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Referer': 'http://localhost:3000',
        'Origin': 'http://localhost:3000'
      },
      body: JSON.stringify({
        ...formData,
        _captcha: 'false'
      })
    });

    const data = await response.json();
    console.log('FormSubmit Response:', data);

    if (response.ok && (data.success === 'true' || data.success === true)) {
      return NextResponse.json({ success: true, message: data.message || 'Form submitted successfully' });
    } else {
      return NextResponse.json(
        { success: false, error: data.message || 'Error submitting form' },
        { status: response.ok ? 400 : response.status }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
