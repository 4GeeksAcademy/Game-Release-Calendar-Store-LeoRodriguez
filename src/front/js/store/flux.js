export const getState = ({ getStore, getActions, setStore }) => {
	const KEY_API = "36254294ed4b46ffbb02d560b2558d65";
	const PAGE_SIZE = 20;
  
	const fetchBestGamesWithBackgroundImage = async () => {
	  try {
		const response = await fetch(`https://api.rawg.io/api/games?dates=2024-01-01,2024-12-31&ordering=-added&page_size=${PAGE_SIZE}&key=${KEY_API}`);
		const data = await response.json();
		const filteredGames = data.results.filter(game => game.background_image !== null);
		return filteredGames;
	  } catch (error) {
		console.error('Error fetching best games with background image', error);
		return [];
	  }
	};
  
	return {
	  store: {
		bestGames2024: [],
		currentMonthReleases: [],
		previousMonthReleases: [],
		nextMonthReleases: []
	  },
	  actions: {
		fetchBestGames2024: async () => {
		  try {
			const filteredGames = await fetchBestGamesWithBackgroundImage();
			setStore({ bestGames2024: filteredGames });
		  } catch (error) {
			console.error('Error fetching best games of 2024', error);
		  }
		},
  
		fetchCurrentMonthReleases: async () => {
		  try {
			const currentDate = new Date();
			const currentYear = currentDate.getFullYear();
			const currentMonth = currentDate.getMonth() + 1;
			const formattedDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-01`;
  
			const response = await fetch(`https://api.rawg.io/api/games?dates=${formattedDate},${formattedDate}&ordering=-added&page_size=${PAGE_SIZE}&key=${KEY_API}`);
			const data = await response.json();
			const filteredGames = data.results.filter(game => game.background_image !== null);
			setStore({ currentMonthReleases: filteredGames });
		  } catch (error) {
			console.error('Error fetching current month releases', error);
		  }
		},
  
		fetchPreviousMonthReleases: async () => {
		  try {
			const currentDate = new Date();
			currentDate.setMonth(currentDate.getMonth() - 1);
			const previousYear = currentDate.getFullYear();
			const previousMonth = currentDate.getMonth() + 1;
			const formattedDate = `${previousYear}-${previousMonth.toString().padStart(2, '0')}-01`;
  
			const response = await fetch(`https://api.rawg.io/api/games?dates=${formattedDate},${formattedDate}&ordering=-added&page_size=${PAGE_SIZE}&key=${KEY_API}`);
			const data = await response.json();
			const filteredGames = data.results.filter(game => game.background_image !== null);
			setStore({ previousMonthReleases: filteredGames });
		  } catch (error) {
			console.error('Error fetching previous month releases', error);
		  }
		},
  
		fetchNextMonthReleases: async () => {
		  try {
			const currentDate = new Date();
			currentDate.setMonth(currentDate.getMonth() + 1);
			const nextYear = currentDate.getFullYear();
			const nextMonth = currentDate.getMonth() + 1;
			const formattedDate = `${nextYear}-${nextMonth.toString().padStart(2, '0')}-01`;
  
			const response = await fetch(`https://api.rawg.io/api/games?dates=${formattedDate},${formattedDate}&ordering=-added&page_size=${PAGE_SIZE}&key=${KEY_API}`);
			const data = await response.json();
			const filteredGames = data.results.filter(game => game.background_image !== null);
			setStore({ nextMonthReleases: filteredGames });
		  } catch (error) {
			console.error('Error fetching next month releases', error);
		  }
		}
	  }
	};
  };