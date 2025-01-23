"use client"

import { AuthContext } from "@/provider/AuthProvider";
import { useRouter } from "next/navigation";

import { useContext, useEffect } from "react";

const page = () => {
    console.log("working")
    let {user} = useContext(AuthContext);
    let router = useRouter();

    
    useEffect(() => {
        if (!user) {
          router.push("/login");  // Redirect to login if user is not authenticated
        }
      }, [user, router]);


    return (
        <div>
            hello
        </div>
    );
};

export default page;