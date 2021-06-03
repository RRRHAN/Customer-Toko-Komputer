import logo from "./logo.svg"
import "./App.css"
import { Switch, Route } from "react-router-dom"
import Login from "./pages/login"
import Product from "./pages/product"
import Transaction from "./pages/transaction"
import Cart from "./pages/cart"

function App() {
	return (
		<Switch>
			<Route exact path='/' component={Product} />
			<Route path='/login' component={Login} />
			<Route path='/transaction' component={Transaction} />
			<Route path='/cart' component={Cart} />
		</Switch>
	)
}

export default App
