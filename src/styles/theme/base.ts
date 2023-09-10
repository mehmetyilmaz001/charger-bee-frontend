import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    // Colors
    colorPrimary: "#DB9559",
    colorBgBase: "white",
    borderRadius: 20
  },

  components: {
    Table: {
      headerBg: "white"
    }
  }
};

export default theme;