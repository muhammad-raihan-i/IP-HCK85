// ini halaman yang muncul kalau
// user mengakses ngekosenak.com/users/:userId
// halaman ini menampilkan detail pengguna
// ambil dari database kecuali kredensial rahasia seperti password


export default function UserDetail(asdfg) {
    const { UserId } = asdfg;
    return (
        <h1>Ini halaman yg diakses ketika user mengakses ngekosenak.com/users/{UserId}</h1>
    )
}