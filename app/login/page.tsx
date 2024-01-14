"use client";

import { useState } from "react";
import { Tabs, Tab, Card, CardBody, Input, Button, Link } from "@nextui-org/react";

export default function Login() {
    const [selected, setSelected] = useState(0);

    return (
        <div className="flex flex-col w-full">
            <Card className="max-w-full w-[340px] h-[400px]">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={0}
                    >
                        <Tab key="login" title="Login">
                            <form className="flex flex-col gap-4">
                                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                <Input
                                isRequired
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                />
                                <p className="text-center text-small">
                                Need to create an account?{" "}
                                    <Link size="sm" onPress={() => setSelected(1)}>
                                        Sign up
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary">
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                        <Tab key="sign-up" title="Sign up">
                            <form className="flex flex-col gap-4 h-[300px]">
                                <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                <Input
                                isRequired
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                />
                                <p className="text-center text-small">
                                Already have an account?{" "}
                                    <Link size="sm" onPress={() => setSelected(0)}>
                                        Login
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary">
                                        Sign up
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    )
}