# Catatan belajar

## Instalasi Next.js dengan Typescript dan yarn

`yarn create-next-app [nama_projek] --ts`

## Menjalakankan projek

`yarn run dev`

## Struktur dan folder projek Next.js

- public/: Digunakan untuk menyimpan file statis
- styles/: Digunakan untuk menyimpan file style (css/scss)
- pages/: Digunakan untuk membuat halaman dan routing file halaman yang telah dibuat

## Routing di Next.js

- Next.js sudah meng-handle routing dengan menambahkan file di folder pages/

## Menggunakan .eslit untuk standar code formater

`npx eslint --init`

## Berpindah halaman dengan component Link

- Menggunakan Link dan bukan tag anchor atau `<a href="/">Link</a>`
- Karena kalau menggunakan tag anchor akan me-refresh halaman
- Menggunakan Link dengan mengimport `Link from 'next/link'`
- Lalu penggunaannya, `<Link href="/">Link</Link>`

## Type props dengan Typescript

- children memiliki type ReactNode

## Kustom halaman 404

- Membuat file 404.tsx di root folder pages/

## Redirect dengan router

- `import {useRouter} from 'next/router'`
- Penggunaan: `const router = useRouter()`
- `router.push('/')`

## Membuat metadata di Next.js untuk SEO

- Menggunakan tag `<Head/>` dari `import Head from 'next/head'`

## Optimasi image di Next.js

- `import Image from next/image`
- Penggunaan: `<Image src="" alt="" />`

## Dynamic routes

- Supaya route dinasim kita bisa tambahkan file di sebuah folder, contoh: `users/[id].tsx`
- Yup, kita bisa beri nama file `[id].tsx` supaya dinamis dan mengambil parameter berupa id
- parameter id bisa didapat menggunakan useRouter, `const {id} = router.query`

## Data fetching getStaticProps

- Data fetching merupakan metode mengambil data di aplikasi Next.js
- getStaticProps: Bisa digunakan untuk menampilkan data sebelum tampilan di-render, sehingga proses request API bisa tidak muncul di network browser karena diproses dulu di server (Next)
- ketika build, data statis yang diambil langsung ditampilkan
- kelemahan dari getStaticProps tidak untuk digunakan pada data yang bersifat dinamis

## Data fetching getStaticPaths(context)

- GetStaticPaths biasanya digunakan bersama dengan getStaticProps, seperti halnya getStaticProps, getStaticPaths digunakan untuk mendefinisikan dinamisnya sebuah alamat website
- Fungsi ini wajib me-return sebuah objek yang di dalamnya ada beberapa key dan value. Salah satu key wajibnya adalah “paths”
- `return { paths: [ { params: { id: '1' } }, { params: { id: '2' } } ], fallback: ... }`
- Perlu menjadi catatan, saat me-return getStaticPath pada key “paths” nama params yang diinput harus sesuai dengan nama file Next.js kita. Misalnya struktur file kita seperti ini: `page/posts/[id].js` maka, nama paramsnya adalah:
  `return { paths: [ { params: { id: 'postingan pertama' } }, ], fallback: ... }`
- Fallback pada hasil return, key fallback ini sifatnya wajib dan bernilai boolean

## Data fetching getServerSideProps

- Seperti pada getStaticProps yang mereturn props, getServerSideProps lebih cocok digunakan pada halaman yang bersifat dinamis atau berubah-ubah isi kontennya, sehingga ketika build halaman ini tidak dijalankan oleh server, namun akan dimuat ketika kita membuka halaman yang menggunakan getServerSideProps
