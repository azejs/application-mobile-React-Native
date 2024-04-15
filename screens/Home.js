import * as React from 'react';
import { StyleSheet, Dimensions,View,Text, Image,ScrollView, Platform } from 'react-native';
import { Block, theme } from 'galio-framework';
import { DataTable,List } from 'react-native-paper';

// import useSWR from "swr";
import axios from 'axios';

const { width } = Dimensions.get('screen');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchs: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch('http://192.168.10.150:3000/api/v1/match')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          matchs: result.value,
        });
      });
  }

  // componentDidMount (){


  //     axios.get('http://192.168.10.150:3000/api/v1/match')
  //     .then(function (response) {
    
  //       this.setState({ matchs: response });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       this.setState({ error });
  //     })
  //   }

  
  renderArticles = () => {
    const {matchs} = this.state;
    return (
    <DataTable>
           
      <DataTable.Header style={{ backgroundColor:'#e6ffe6'}}>
                <DataTable.Title style={{flex:2}}>Début</DataTable.Title>
                <DataTable.Title style={{flex:2}} >Code</DataTable.Title>
                <DataTable.Title style={{flex:5, textAlign: 'center'}}> Matchs</DataTable.Title>
                <DataTable.Title  >TIP</DataTable.Title>
                <DataTable.Title  >1</DataTable.Title>
                <DataTable.Title  >X</DataTable.Title>
                <DataTable.Title  >2</DataTable.Title>
      </DataTable.Header>
    {matchs.map( et => {return (

    <DataTable.Row   >
                <DataTable.Cell  style={{flex:2}}>{et.date}</DataTable.Cell>
                <DataTable.Cell  style={{flex:2}}>{et.code}</DataTable.Cell>
                <DataTable.Cell  style={{flex:5}} >
                <View >
                    <Text >{et.equipe1}</Text>
                    <Text >{et.equipe2}</Text>
                </View>
                    </DataTable.Cell>
                <DataTable.Cell  style={{flex:1}} >{et.preface}</DataTable.Cell>
                <DataTable.Cell style={{flex:1}}>{et.chance1}</DataTable.Cell>
                <DataTable.Cell style={{flex:1}}>{et.chancex}</DataTable.Cell>
                <DataTable.Cell   style={{flex:1}}>{et.chance2}</DataTable.Cell>
    </DataTable.Row>
   
   )}  )}     

              {/* <DataTable.Pagination
                page={1}
                numberOfPages={3}
                onPageChange={page => {
                  console.log(page);
                }}
                label="1-2 of 10"
              /> */}
</DataTable>
   
     
       
        
   
    )
  }

  render() {
  console.log('matchs', this.state.matchs);
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  matchConatiner1: {
    height: 70,
    backgroundColor: "#141414",
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  matchConatiner2: {
    height: 70,
    backgroundColor: "#1d1d1d",
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  boxOne: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: "space-between",
    top: 14,
  },
  boxTwo: {
    flex: 1
  },
  minute: {
    left: 10,
    top: 5,
    color: "white",
    fontSize: 16,
    width: 50
  },
  infoImage: {
    width: 200,
    height: 90,
    top: -10
  },
  all: {
    color: "white",
    fontSize: 17,
    top: -4
  },
  score: {
    fontWeight: "bold"
  }
});
 

export default Home;
