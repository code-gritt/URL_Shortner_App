import React from "react";
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

const Login = () => {
  return (
    <>
      <div className="showBox">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              to your account if you already have one
            </CardDescription>
            {/* {error && <Error message={error.message} />} */}
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Input
                name="email"
                type="email"
                placeholder="Enter Email"
                // onChange={handleInputChange}
              />
            </div>
            {/* {errors.email && <Error message={errors.email} />} */}
            <div className="space-y-1">
              <Input
                name="password"
                type="password"
                placeholder="Enter Password"
                // onChange={handleInputChange}
              />
            </div>
            {/* {errors.password && <Error message={errors.password} />} */}
          </CardContent>
          <CardFooter>
            <Button>
              {false ? <BeatLoader size={10} color="#36d7b7" /> : "Login"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;
