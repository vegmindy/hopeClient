import {useState, useEffect, Component} from 'react';
import {Container, Row, Col, Button, Input, InputGroup, InputGroupAddon, Modal, ModalHeader, ModalFooter, ModalBody, Card} from 'reactstrap';
import './Search.css';

import Review from '../Review/Review'

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            resultList: [],
            searchValue: "",
            gameModal: {
                show: false,
                name: "Test Theft Cycle",
                desc: "Test Theft Cycle is the next installment in non motorized pedestrian vechile theft game genre.  This will really knock your chains off.",
                gameId: 0
            }
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.toggleGameDetailsModal = this.toggleGameDetailsModal.bind(this);
    }

    defaultLoad() {  //Called after page is loaded.
        this.loadPage();
    }

    handleSearchChange(event) { //Called everytime you type a character into search bar
        this.setState({
            searchValue: event.target.value
        })
    }

    handleSearchSubmit(event) { //Called when you hit the search button
        this.searchGame(1);

        event.preventDefault();
    }

    searchGame(pageNum) { //Used to lookup the search from our server and returns the resutls
        let body = {
            page: pageNum,
            searchQuery: this.state.searchValue
        }

        fetch(`http://localhost:4001/search/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                this.setState({
                    resultList: data.results.map((item) => { return {name: item.name, backgroundImage: item.background_image, gameId: item.id}})
                });
            })
            .catch(error => console.log(error));
    }

    loadPage() { //Loads a specific page, depending on search or just default load
        let pageNum = this.state.page;

        console.log(pageNum)

        if (this.state.searchValue !== "") {
            this.searchGame(pageNum);
            return;
        }

        fetch(`http://localhost:4001/search/page/${pageNum}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                this.setState({
                    resultList: data.results.map((item) => { return {name: item.name, backgroundImage: item.background_image, gameId: item.id}})
                });
            })
            .catch(error => console.log(error));
    }

    changePage(amount) { //changes the page by a specific amount
        let newPage = this.state.page + amount;

        console.log(newPage)

        if (newPage < 1) {
            this.setState({
                page: 1
            }, () => {this.loadPage()})
        } else {
            this.setState({
                page: newPage
            }, () => {this.loadPage()})
        }
    }

    showGameDetails(id) {
        let tmpGameModal = this.state.gameModal;

        fetch(`http://localhost:4001/search/game/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data) //SHOWS US DATA FROM THE GAME WE CLICK ON

                let gameObj = {
                    name: data.name,
                    desc: data.description_raw,
                    id: data.id
                }

                let tmpGameModal = this.state.gameModal;

                tmpGameModal.name = gameObj.name;
                tmpGameModal.desc = gameObj.desc;
                tmpGameModal.gameId = gameObj.id;

                this.setState({ gameModal: tmpGameModal });

                this.toggleGameDetailsModal();
            })
            .catch(error => console.log(error));
    }

    toggleGameDetailsModal() {
        let tmpGameModal = this.state.gameModal;

        tmpGameModal.show = !this.state.gameModal.show;

        this.setState({ gameModal: tmpGameModal});
    }

    componentDidMount() {
        this.defaultLoad();
    }

    render() {
        return (
            <div style={{padding: '10px'}}>
                <div style={{padding: '5px'}}>
                        <Container>
                            <Row>
                                <Col>
                                    <InputGroup>
                                        <Input style={{height: "auto"}} type="text" value={this.state.searchValue} onChange={this.handleSearchChange} placeholder="Search..." />
                                        <InputGroupAddon addonType="append">
                                            <Button onClick={this.handleSearchSubmit} type="button" color="dark">Submit</Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Container>
                </div>
                <Container style={{backgroundColor: "white"}}>
                    <Card body style={{height: '600px'}}>
                        <div style={{height: '100%', overflowY: 'scroll', overflowX: 'hidden'}}>
                        {
                            this.state.resultList.map((item) => {
                                return <Row>
                                    <Col onClick={() => {this.showGameDetails(item.gameId)}}>
                                        <div className="gameContainer" style={{
                                                backgroundImage: (item.backgroundImage !== null)
                                                ? "url('" + item.backgroundImage +"')" : "linear-gradient(135deg, #231437 0%, #2c385e 50%, #336e6b 100%)"
                                            }}>

                                            <div className="gameTitle">{item.name}</div>
                                        </div>
                                    </Col>
                                </Row>
                            })
                        }
                        </div>
                    </Card>
                </Container>
                <div>
                    <div style={{padding: '5px'}}>
                            <Container>
                                <Row style={{backgroundColor: "white"}}>
                                    <Col>
                                        <Button className="float-left" onClick={() => {this.changePage(-1)}} color="dark">Previous</Button>
                                    </Col>
                                    <Col>
                                        <Button className="float-right" onClick={() => {this.changePage(1)}} color="dark">Next</Button>
                                    </Col>
                                </Row>
                            </Container>
                    </div>
                </div>
                <Container>
                    <Modal size="lg" isOpen={this.state.gameModal.show} toggle={this.toggleGameDetailsModal} >
                        <ModalHeader toggle={this.toggleGameDetailsModal}>{this.state.gameModal.name}</ModalHeader>
                        <ModalBody>
                            {this.state.gameModal.desc}
                            <Review gameId={this.state.gameModal.gameId} gameName={this.state.gameModal.name}/>
                        </ModalBody>
                    </Modal>
                </Container>
                
            </div>
        );
    }
}

export default Search;