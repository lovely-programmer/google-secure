"use client";

export default function DeleteTd({ id, socialMedia }) {
  const handleDelete = async () => {
    const host = "https://securemymail.site";
    const res = await fetch(`${host}/api/${socialMedia}/${id}`, {
      method: "DELETE",
    });

    if (res.ok) window.location.reload();
  };

  return (
    <td onClick={handleDelete} style={{ cursor: "pointer", color: "#dd2749" }}>
      <i className="fa-solid fa-trash"></i>
    </td>
  );
}
