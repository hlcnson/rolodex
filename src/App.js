import React, { Component } from 'react';
// import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

// // Function này trả về một react component dạng function.
// function App() {
  
// }

// Dây là một react component dạng class
class App extends Component {
    // Hàm tạo
    constructor(){
        // Gọi hàm tạo của lớp cha (Component class)
        super();
        // Tạo state cho class hiện hành (App class)
        this.state = {
            monsters: [],
            searchField: ''
        }

        // Ngay khi component vừa được khởi tạo,
        // kích hoạt lệnh này để react ràng buộc ngữ cảnh từ khóa
        // this với hàm handleChange. Hàm bind là một phương thức
        // sẽ có trên mọi hàm (bao gồm cả hàm tự định nghĩa) và
        // nó trả về một hàm được ràng buộc với ngữ cảnh của từ
        // khóa this. Lệnh này làm cho từ khóa this có thể được
        // sử dụng bên trong phương thức tự định nghĩa và tham chiếu
        // đến ngữ cảnh là class hiện hành.
        this.handleChange = this.handleChange.bind(this);
    }

    // 
    handleChange = (e) => {
        this.setState({searchField: e.target.value});
    }

    // Đây là một react component lifecycle method, được kích hoạt
    // ngay sau khi component đã được mount vào DOM
    componentDidMount(){
        // fetch là một navtive JS function để kích hoạt một API
        // và trả về một promise
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({monsters: users}));
    }

    render(){
        const { monsters, searchField } = this.state;
        // filter là một array method. Hàm này xử lý lọc từng phần
        // tử trong mảng kích hoạt nó và nhận đối số là một function
        // để xử lý lọc.
        // Hàm include kiểm tra xem chuỗi đối số có nằm trong 
        // chuỗi kích hoạt hàm không.
        const filteredMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox 
                    placeholder='Search monsters' 
                    handleChange={this.handleChange}
                />
                {
                // Thuộc tính monsters sẽ được đặt vào tham số props của CardList.
                }
                <CardList 
                    monsters={filteredMonsters}
                />
                
            </div>
        );
    }
}

export default App;
