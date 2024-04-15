import React, { useState, useEffect } from "react";
import { Context } from "./Context";
import { getState } from "./flux"; // Import the modified getState function

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			// Fetch games when component mounts
			state.actions.fetchBestGames2024();
			state.actions.fetchCurrentMonthReleases();
			state.actions.fetchPreviousMonthReleases();
			state.actions.fetchNextMonthReleases();
		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;