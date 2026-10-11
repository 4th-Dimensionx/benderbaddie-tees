export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  const name = typeof body.name === 'string' ? body.name : 'friend';
  const email = typeof body.email === 'string' ? body.email : 'No email provided';
  const brief = typeof body.brief === 'string' ? body.brief : 'No brief provided';

  return Response.json({
    success: true,
    message: `Thanks ${name}, your custom order has been received.`,
    email,
    brief,
    status: 'pending',
  });
}
