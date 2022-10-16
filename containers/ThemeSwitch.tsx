import { PropsWithChildren, useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import ButtonIcon from '../components/ButtonIcon';

const THEME_KEY = 'theme';

function ThemeSwitch({ children }: PropsWithChildren) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDark =
      JSON.parse(localStorage.getItem(THEME_KEY) ?? '{}')?.isDark ??
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    setTheme({ isDark });
  }, []);

  function setTheme({ isDark }: { isDark: boolean }) {
    setIsDark(isDark);
    localStorage.setItem(THEME_KEY, JSON.stringify({ isDark }));

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function toggleDarkTheme() {
    setTheme({ isDark: !isDark });
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="self-end">
        <ButtonIcon
          icon={isDark ? <FiSun /> : <FiMoon />}
          onClick={toggleDarkTheme}
        />
      </div>

      {children}
    </div>
  );
}

export default ThemeSwitch;
