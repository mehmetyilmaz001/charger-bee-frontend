import React from "react";
import { theme } from "antd";
import { ThemeProvider as Provider } from "styled-components";
import { useResponsive } from "@/hooks/useResponsive";

const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
    const { token } = theme.useToken();
    const { device } = useResponsive();

    return <Provider theme={{antd: token, device}}>{children}</Provider>

}

export default ThemeProvider;