import sanityclient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityclient({
    projectId:'jy3bm0x7',
    dataset:'production',
    apiVersion: '2022-09-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITYT_TOKEN

});

const builder = imageUrlBuilder(client);

export const urlFor = (soruce) => builder.image(soruce);