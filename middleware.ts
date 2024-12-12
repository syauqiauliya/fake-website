import { NextResponse } from 'next/server';

interface RequestCount {
  count: number;
  firstRequestTime: number;
}

const RATE_LIMIT = 100; // Max number of requests per minute
const TIME_WINDOW = 60 * 1000; // 1 minute (in milliseconds)
const REQUESTS: { [key: string]: RequestCount } = {}; // In-memory store

export async function middleware(req: Request) {
  // Get the user's IP address
  const ip = req.headers.get('x-real-ip') || req.ip || '127.0.0.1'; 

  const now = Date.now(); // Use the built-in Date object to get the current timestamp in milliseconds

  if (!REQUESTS[ip]) {
    // If it's the first request from this IP, initialize the record
    REQUESTS[ip] = { count: 1, firstRequestTime: now };
    return NextResponse.next();
  }

  const userRequest = REQUESTS[ip];

  if (now - userRequest.firstRequestTime > TIME_WINDOW) {
    // If the time window has passed, reset the count
    userRequest.count = 1;
    userRequest.firstRequestTime = now;
    return NextResponse.next();
  }

  if (userRequest.count >= RATE_LIMIT) {
    // If the user exceeds the rate limit, block the request
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  // Otherwise, increment the request count
  userRequest.count += 1;
  return NextResponse.next();
}

export const config = {
  matcher: '/', // Apply rate limiting to all routes, including pages
};
