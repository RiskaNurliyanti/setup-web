"use client";

export default function Page(){
    return (
        <>
        <main>
            <p><strong>Daftar Kehilangan Barang</strong></p>
                <table>
                    <thead>
                    <tr>
                        <th colSpan={2}>Waktu</th>
                        <th rowSpan={2}>Piket</th>
                        <th rowSpan={2}>Jumlah Barang yang Hilang</th>
                    </tr>
                    <tr>
                        <th>Bulan</th>
                        <th>Tanggal</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td rowSpan={3}>Januari</td>
                        <td>10</td>
                        <td>Regu A</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Regu B</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Regu C</td>
                        <td>0</td>
                    </tr>
                    </tbody>
                    <tfoot>
                        <th colSpan={3}>Jumlah</th>
                        <td>4</td>
                    </tfoot>
                </table>

                <style jsx>{`
                    main {
                    margin: 20px;
                    font-family: sans-serif;
                    }

                    table {
                    border-collapse: collapse;
                    width: 100%;
                    margin-top: 10px;
                    }

                    th, td {
                    border: 1px solid #ccc;
                    padding: 8px 12px;
                    // text-align: left;
                    }

                    th {
                    background-color: #f0f0f0;
                    color: #333;
                    }

                    tr:nth-child(even) {
                    background-color: #fafafa;
                    }
        `}</style>
        </main>

        </>
    );
}