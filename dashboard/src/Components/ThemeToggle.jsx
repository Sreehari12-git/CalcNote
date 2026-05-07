import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/reducers/themeSlice'

export default function ThemeToggle() {
  const dispatch = useDispatch()
  const themeMode = useSelector((state) => state.theme.mode)

  const themes = [
    { mode: 'light', icon: '☀️', label: 'Light' },
    { mode: 'dark',  icon: '🌙', label: 'Dark'  },
    { mode: 'system',icon: '💻', label: 'System'},
  ]

  return (
    <div className="theme-toggle">
      {themes.map(({ mode, icon, label }) => (
        <button
          key={mode}
          onClick={() => dispatch(setTheme(mode))}
          className={themeMode === mode ? 'active' : ''}
        >
          {icon} {label}
        </button>
      ))}
    </div>
  )
}