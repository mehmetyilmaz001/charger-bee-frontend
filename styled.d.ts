import { IDevice } from '@/types/responsive';
import type { GlobalToken } from 'antd';

declare module 'styled-components' {
    export interface DefaultTheme {
        antd: GlobalToken,
        device: IDevice
    }
}