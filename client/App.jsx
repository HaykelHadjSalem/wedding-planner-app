import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'home',
            packages: [],
            currentPackage: null
        }
    }

    componentDidMount() {
        // $.get('/packages').then(results => {
        //     console.log(results)
        //     var first = Math.floor(Math.random() * results.length);
        //     do {
        //         var second = Math.floor(Math.random() * results.length);
        //     } while(second === first)
        //     do {
        //         var third = Math.floor(Math.random() * results.length);
        //     } while(third === first || third === second)
        //     this.setState(prevState => ({
        //         packages: prevState.packages.concat(results[first], results[second], results[third])
        //     }))
        // })
        var packages = [{id:0, name: 'Basic', price: 8000, imageUrl: 'https://bbc136b7ae3badc49324-4505d403f77dee961d206e5b048c01ea.ssl.cf3.rackcdn.com/SeDireOui/web/modele-business-plan-wedding-planner-thumb.jpg'},
        {id: 1, name: 'Simple', price: 10000, imageUrl: 'https://www.mariage.com/wp-content/uploads/2016/04/une-mariage-papiers.jpg'},
        {id: 2, name: 'Romantic', price: 12000, imageUrl: 'https://www.mariage.com/wp-content/uploads/2016/02/une-mariage-romantique.jpg'}];
        this.setState({
            packages
        })
    }
    changeView(option) {
        this.setState({
            view: option
        })
    }
    selectPackage(id) {
        this.setState({
            currentPackage: id
        })

    }
    render() {
        return (
            <div>
                <div className="navbar navbar-light nav">
                    <div className= "container-fluid">
                        <span className="navbar-brand text-white">The Velvet Box</span>
                    <span className='nav-item'
                    onClick={() => this.changeView('home')}>
                        Home
                    </span>
                    <span className='nav-item'
                    onClick={() => this.changeView('packages')}>
                        Packages
                    </span>
                    <span className='nav-item'
                    onClick={() => this.changeView('products')}>
                        Products
                    </span>
                    <span className='nav-item'
                    onClick={() => this.changeView('aboutUs')}>
                        About Us
                    </span>
                    <span className='nav-item'
                    onClick={() => this.changeView('login')}>
                        Log in
                    </span>
                    </div>
                    
                </div>
                {this.state.view === 'home' ? <div>
                    app description and 3 packages picked from packages database
                    <div className="container">
                    <div className="row">
                        {this.state.packages.map(pack => 
                            <div key={pack.id} className="col-sm">
                            <img src={pack.imageUrl} className="img-thumbnail previewImage" 
                            onClick={() => {this.changeView('package')
                                            this.selectPackage(pack.id)}}/>
                            <h4>Type: {pack.name}</h4>
                            <span>Price: {pack.price} DT</span>
                        </div>)}
                    </div>
                    </div>

                </div> 
                : null}


            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))