// Server Actions removed for static export compatibility.
// Use API routes (e.g. /api/auth/signup) or client-side logic instead.
/* Mock user creation */
// ...existing code...
console.log("User created:", { name, email, hashedPassword });
{
  /*  Uncomment this when you have a database connection
  await db.user.create({
  data: {
    name,
    email,
    password: hashedPassword,
  },
});
  */
}

return { success: true, message: "Account created!" };
// ...existing code...
