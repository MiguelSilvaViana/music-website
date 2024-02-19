import { NextResponse } from 'next/server';
import db from '../../../../_data/db.json';

export async function GET(request, { params }) {
  const id = params.id;

  const dataMap = {
    posts: db.posts,
    events: db.events,
    albums: db.albums
  };

  try {
    const responseData = dataMap[id];
    const dataArray = Array.isArray(responseData) ? responseData : [responseData];
    return NextResponse.json(dataArray);

    // return NextResponse.json({ ...dataMap[id] });
  } catch (error) {
    return NextResponse.error({
      status: 500,
      message: 'Erro ao buscar dados.'
    });
  }
}
