// 后端路由
import { NextResponse, NextRequest } from 'next/server';
export async function GET(request: NextRequest) {
  const p = request.nextUrl.searchParams.get('test');
  return NextResponse.json({
    name: 'zhangsan',
    age: 18,
    url: p,
  });
}
