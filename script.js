(function () {
	const root = document.body;
	const STORAGE_KEY = 'theme';
	const themeToggle = document.getElementById('themeToggle');
	const iconSun = document.getElementById('iconSun');
	const iconMoon = document.getElementById('iconMoon');

	function getSystemPrefersDark() {
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	function applyTheme(theme) {
		if (theme === 'dark') {
			root.classList.add('theme-dark');
		} else {
			root.classList.remove('theme-dark');
		}
		// Swap icons
		const isDark = root.classList.contains('theme-dark');
		iconSun.classList.toggle('hidden', !isDark);
		iconMoon.classList.toggle('hidden', isDark);
	}

	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved) {
		applyTheme(saved);
	} else if (getSystemPrefersDark()) {
		applyTheme('dark');
	} else {
		applyTheme('light');
	}

	themeToggle?.addEventListener('click', () => {
		const nowDark = !root.classList.contains('theme-dark');
		applyTheme(nowDark ? 'dark' : 'light');
		localStorage.setItem(STORAGE_KEY, nowDark ? 'dark' : 'light');
	});

	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();