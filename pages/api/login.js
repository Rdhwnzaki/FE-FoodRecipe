export default function login(req, res) {
  console.log(req.method);
  if (req.method == "POST") {
    console.log("add token to cookie");
    const token = req.body.token;
    const id_user = req.body.id_user;
    console.log(id_user);
    res.setHeader(
      "Set-Cookie",
      `token=${token}; Path=/ ; httpOnly ; Max-Age : 9000000000; Secure ; SameSite=None`,
      `id_user=${id_user}; Path=/ ; httpOnly ; Max-Age : 9000000000; Secure ; SameSite=None`
    );
    res.send({
      logout: false,
      login: true,
    });
  } else {
    res.send({
      logout: true,
    });
  }
}
