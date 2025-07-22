// ini halaman yang muncul kalau
// user mengakses ngekosenak.com/rooms/:roomId
// halaman ini menampilkan detail koskosan
// semua informasi koskosan ditampilkan di sini

export default function RoomDetail(asdfg){
    const { RoomId } = asdfg;
    return (
        <h1>Ini halaman yg diakses ketika
            <br/>
            user mengakses ngekosenak.com/rooms/{RoomId}
        </h1>
    )
}