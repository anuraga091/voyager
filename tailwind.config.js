/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(27, 27, 27)',
        customTableBorder: 'rgb(56, 56, 56)',
        customTextBlue: 'rgb(139, 163, 223)',
        customGrayText: 'rgb(170, 170, 170)',
        invokeBackground: 'rgb(32, 46, 38)',
        invokeText: 'rgb(130, 244, 187)',
        invokeBorder: 'rgb(46, 76, 60)' ,
        declareBackground: 'rgb(32, 46, 38)',
        declareText: 'rgb(254, 255, 181)',
        declareBorder: 'rgb(107, 125, 7)',
        deployBackground: 'rgb(34, 54, 85)',
        deployText: 'rgb(210, 229, 255)',
        deployBorder: 'rgb(60, 80, 110)',
        deployAccountBackground: 'rgb(34, 54, 85)',
        deployAccountText: 'rgb(210, 229, 255)',
        deployAccountBorder: 'rgb(60, 80, 110)',
        l1HandlerBackground: 'rgb(56, 56, 56)',
        l1HandlerText: 'rgb(255, 255, 255)',
        l1HandlerBorder: 'rgb(94, 94, 94)',
        activeColor: 'rgb(75, 75, 75)',
        tooltipBackground: 'rgb(235,235,235)',
        customGreen: 'rgb(17, 125, 73)',
        executionResourcesColor: 'rgb(255, 200, 153)',
        executionResourcesBgColor: 'rgb(59, 42, 28)',
        executionResourcesBorderColor: 'rgb(88, 63, 42)',
        hoveractiveColor: 'rgba(74, 74, 74, 0.5)',
        callDataBg: 'rgb(37, 37, 37)',
      },
      fontSize: {
        sm: '10px',
        base: '12px',
        lg: '14px',
        xl: '16px',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

