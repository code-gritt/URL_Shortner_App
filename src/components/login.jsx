import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BeatLoader } from "react-spinners";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Error from "./error";
import useFetch from "@/hooks/use-fetch";
import { login } from "@/db/apiAuth";

const Login = () => {
  // let [searchParams] = useSearchParams();
  // const longLink = searchParams.get("createNew");

  // const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const { fetchUser } = UrlState();
  const { loading, error, fn: fnLogin, data } = useFetch(login, formData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(data);
    // if (error === null && data) {
    //   fetchUser();
    //   navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleLogin = async () => {
    setErrors([]);
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      });

      await schema.validate(formData, { abortEarly: false });
      await fnLogin();
    } catch (e) {
      const newErrors = {};

      e?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="showBox">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              to your account if you already have one
            </CardDescription>
            {error && <Error message={error.message} />}
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Input
                name="email"
                type="email"
                placeholder="Enter Email"
                onChange={handleInputChange}
              />
            </div>
            {/* {errors.email && <Error message={errors.email} />} */}
            <div className="space-y-1">
              <Input
                name="password"
                type="password"
                placeholder="Enter Password"
                onChange={handleInputChange}
              />
            </div>
            {/* {errors.password && <Error message={errors.password} />} */}
          </CardContent>
          <CardFooter>
            <Button onClick={handleLogin}>
              {loading ? <BeatLoader size={10} color="#36d7b7" /> : "Login"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;
