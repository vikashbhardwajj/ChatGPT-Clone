import axios from "../api/axiosConfig";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async data => {
    // replace with real auth call
    try {
      const response = await axios.post("/api/auth/login", data);
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
    console.log("Login data:", data);
    reset();
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <h1 style={styles.title}>Login</h1>

        <label style={styles.label}>
          Email
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
            })}
            style={styles.input}
          />
          {errors.email && (
            <span style={styles.error}>{errors.email.message}</span>
          )}
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            placeholder="••••••••"
            {...register("password", {
              required: "Password required",
              minLength: { value: 4, message: "Min 4 chars" },
            })}
            style={styles.input}
          />
          {errors.password && (
            <span style={styles.error}>{errors.password.message}</span>
          )}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{ ...styles.button, opacity: isSubmitting ? 0.7 : 1 }}
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    background: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "system-ui, sans-serif",
  },
  form: {
    width: "100%",
    maxWidth: 340,
    padding: "2rem",
    background: "#fff",
    borderRadius: 10,
    boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "1.1rem",
  },
  title: {
    margin: 0,
    fontSize: "1.4rem",
    textAlign: "center",
    fontWeight: 600,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: ".85rem",
    gap: ".35rem",
    color: "#222",
  },
  input: {
    padding: ".65rem .75rem",
    borderRadius: 6,
    border: "1px solid #ccc",
    fontSize: ".9rem",
    outline: "none",
    transition: "border-color .15s",
  },
  error: {
    color: "#d33",
    fontSize: ".7rem",
    marginTop: "-.2rem",
  },
  button: {
    marginTop: ".5rem",
    padding: ".7rem .9rem",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontSize: ".9rem",
    cursor: "pointer",
    fontWeight: 500,
  },
};

export default Login;
