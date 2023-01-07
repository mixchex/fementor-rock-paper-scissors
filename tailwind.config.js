/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  purge: {
    options: {
      safelist: [
        /^bg-/,
        /^text-/,
        /^shadow-/,
        'delay-100',
        'delay-200',
        'delay-300',
        'delay-400',
        'delay-500',
        'bg-rock-light',
        'bg-rock-dark',
        'bg-paper-light',
        'bg-paper-dark',
        'bg-scissors-light',
        'bg-scissors-dark',
        'bg-lizard-light',
        'bg-lizard-dark',
        'bg-spock-light',
        'bg-spock-dark',
        'shadow-disc-paper-sm',
        'shadow-disc-paper-lg',
        'shadow-disc-rock-sm',
        'shadow-disc-rock-lg',
        'shadow-disc-scissors-sm',
        'shadow-disc-scissors-lg',
        'shadow-disc-lizard-sm',
        'shadow-disc-lizard-lg',
        'shadow-disc-spock-sm',
        'shadow-disc-spock-lg'
      ]
    }
  },
  theme: {
    
    fontFamily: {
      sans: ['Barlow Semi Condensed', 'sans-serif'],
      serif: []
    },
    extend: {
      width: {
        33: '8.25rem',
        49: '12.25rem',
        55: '13.75rem',
        74: '18.5rem'
      },
      maxWidth: {
        400: '400px',
        700: '700px'
      },
      height: {
        32: '8rem',
        //48: '12rem'
        //72: '18rem'
      },
      colors: {
        scissors: {
          dark: 'hsl(39, 89%, 49%)',
          light: 'hsl(40, 84%, 53%)'
        },
        paper: {
          dark: 'hsl(230, 89%, 62%)',
          light: 'hsl(230, 89%, 65%)'
        },
        rock: {
          dark: 'hsl(349, 71%, 52%)',
          light: 'hsl(349, 70%, 56%)'
        },
        lizard: {
          dark: 'hsl(261, 73%, 60%)',
          light: 'hsl(261, 72%, 63%)'
        },
        spock: {
          dark: 'hsl(189, 59%, 53%)',
          light: 'hsl(189, 58%, 57%)'
        },
        dark: 'hsl(229, 25%, 31%)',
        score: 'hsl(229, 64%, 46%)',
        outline: 'hsl(217, 16%, 45%)',
        back: {
          start: 'hsl(214, 47%, 23%)',
          end: 'hsl(237, 49%, 15%)'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-to-t': 'radial-gradient(50% 110% at 50% -10%, var(--tw-gradient-stops))',
        'gradient-radial-to-tr': 'radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))',
        'gradient-radial-to-tl': 'radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))',
        'gradient-radial-to-br': 'radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))',
        'gradient-radial-to-bl': 'radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))'      },
      boxShadow: {
        'disc-paper-sm': '0 8px 0 0 rgba(72,101,244,1)',
        'disc-paper-md': '0 12px 0 0 rgba(72,101,244,1)',
        'disc-rock-sm': '0 8px 0 0 rgba(220,46,78,1)',
        'disc-rock-md': '0 12px 0 0 rgba(220,46,78,1)',
        'disc-scissors-sm': '0 8px 0 0 rgba(236,158,14,1)',
        'disc-scissors-md': '0 12px 0 0 rgba(236,158,14,1)',
        'disc-lizard-sm': '0 8px 0 0 rgba(131,79,227,1)',
        'disc-lizard-md': '0 12px 0 0 rgba(131,79,227,1)',
        'disc-spock-sm': '0 8px 0 0 rgba(64,185,206,1)',
        'disc-spock-md': '0 12px 0 0 rgba(64,185,206,1)',
        'disc-inset-sm': 'inset 0 6px 0 0 rgba(0,0,0,0.1)',
        'disc-inset-md': 'inset 0 8px 0 0 rgba(0,0,0,0.1)',
      },
      keyframes: {
        'disc-winner-sm': {
          '0%': {
            boxShadow: '0 0 0 0px rgba(82, 190, 209, 0.1), 0 0 0 0px rgba(82, 190, 209, 0.1), 0 0 0 0px rgba(82, 190, 209, 0.1)'
          },
          '100%': {
            boxShadow: '0 0 0 24px rgba(82, 190, 209, 0), 0 0 0 48px rgba(82, 190, 209, 0), 0 0 0 96px rgba(82, 190, 209, 0)'
          },
        },
        'disc-winner-lg': {
          '0%': {
            boxShadow: '0 0 0 0px rgba(82, 190, 209, 0.1), 0 0 0 0px rgba(82, 190, 209, 0.1), 0 0 0 0px rgba(82, 190, 209, 0.1)'
          },
          '100%': {
            boxShadow: '0 0 0 72px rgba(82, 190, 209, 0), 0 0 0 144px rgba(82, 190, 209, 0), 0 0 0 216px rgba(82, 190, 209, 0)'
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(2)',
            opacity:0
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        }
      },
      animation: {
        'disc-winner-sm': 'disc-winner-sm 5s linear infinite',
        'disc-winner-lg': 'disc-winner-lg 5s linear infinite',
        'scale-in': 'scale-in 1s ease-out 1 both'
      },
    },
  },
  plugins: [],
}
