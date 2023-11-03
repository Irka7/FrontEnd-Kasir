import Link from "next/link";
import { type } from "os";

// type Category = {
//   id: number;
//   name: string;
// };
// const getCategory = async () => {
//   const res = await axios.get("http://127.0.0.1:8000/api/category");
//   return res.data.data;
// };
const CategoryList = async () => {
  const category: Category[] = await getCategory();
  return (
    <div className="py-10 px-10">
            <div className="py-2"></div>
            <table className="table table-zebra">
                <thead>
                    <tr className="bg-base-200">
                        <th>No.</th>
                        <th>Nama Kategory</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {category.map((category, index) => (
                    <tr key={category.id}>
                        <td>{index + 1}</td>
                        <td>{category.name}</td>
                        <td>Edit | Hapus</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
};