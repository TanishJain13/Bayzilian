import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    console.log('API Request Headers:', { origin, referer });

    const response = await fetch('https://formsubmit.co/ajax/bayzilianprofessional@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': referer || 'https://www.bayzilian.com',
        'Origin': origin || 'https://www.bayzilian.com'
      },
      body: JSON.stringify({
        ...formData,
        _captcha: 'false'
      })
    });

    const responseText = await response.text();
    console.log('FormSubmit Raw Response:', responseText);

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse FormSubmit response as JSON. Raw text:', responseText);
      return NextResponse.json(
        { success: false, error: 'FormSubmit returned an invalid response.' },
        { status: 502 }
      );
    }

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
