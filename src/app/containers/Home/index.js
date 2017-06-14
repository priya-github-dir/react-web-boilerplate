/**
 * Created by intelligrape on 5/6/17.
 */

import React, { Component } from 'react';
// import OwlSlider from "../OwlSlider"
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import UsageCard from '../../components/UsageCard';
import Tabs from '../../components/Menu'
import MobileListPanel from '../../components/MobileListPanel'

// import Rails from '../Rails';
// import {getHomeContent} from './action';
// import { sectionType } from '../../../constants';
// import InfiniteScroll from 'react-infinite-scroll-component';

const tabContent = [
    {
        displayText: 'Voice',
        tabName: 'Calls',
        completion: '50',
        details: '200/400 calls used',
        updatedOn: Date.now(),
        uiControls: {
            progressBarType: 'Circular'     // should be configurable.
        }
    },
    {
        tabName: 'Data',
        displayText: 'Internet',
        completion: '30',
        details: '30MB/100MB used',
        updatedOn: Date.now(),
        uiControls: {
            progressBarType: 'Circular'
        }
    },
    {
        tabName: 'Sms',
        displayText: 'Sms',
        completion: '70',
        details: '70/100 sms used',
        updatedOn: Date.now(),
        uiControls: {
            progressBarType: 'Circular'
        }
    },
    {
        tabName: 'Promotion',
        displayText: 'Promotion Text',
        completion: '90',
        details: '90/100 texts used',
        updatedOn: Date.now(),
        uiControls: {
            progressBarType: 'Circular'
        }
    },
    {
        tabName: 'Balances',
        displayText: 'Account',
        completion: '10',
        details: '10/100 Rs remaining',
        updatedOn: Date.now(),
        uiControls: {
            progressBarType: 'Circular'
        }
    }
];

const data = {
    points: {
      total: [
        { id: 1, name: 'Home', fontIcon: 'home', subMenu:[{}] , isShow:true, accountType:['P', 'H', 'I', 'T']},
        { id: 2, name: 'My profile', fontIcon: 'user', subMenu:[{id:101, name:"Test menu Sub 1", fontIcon:"home"},{id:102, name:"Test menu Sub 5", fontIcon:"home"}], isShow:true, accountType:['P', 'I', 'T']},
        { id: 3, name: 'My Usage', fontIcon: 'pie-chart', subMenu:[{}], isShow:true, accountType:['P', 'H', 'I', 'T']  },
        { id: 4, name: 'Bills and Payments', fontIcon: 'credit-card-alt', subMenu:[{}], isShow:true, accountType:['T']  },
        { id: 5, name: 'Plans And Add-Ons', fontIcon: 'mobile', subMenu:[{id:103, name:"Test menu Sub 72", fontIcon:"home"}], isShow:true, accountType:[ 'I', 'T']  },
        { id: 6, name: 'My Balance and Top Up', fontIcon: 'bar-chart', subMenu:[{id:104, name:"Test menu Sub 42", fontIcon:"home"}], isShow:true , accountType:[ 'I', 'T'] },
        { id: 7, name: 'Loyalty Points', fontIcon: 'gift', subMenu:[{id:105, name:"Test menu Sub 12", fontIcon:"home"}], isShow:true, accountType:['P', 'H', 'I', 'T']  },
        { id: 8, name: 'Store', fontIcon: 'shopping-basket', subMenu:[{id:106, name:"Test menu Sub 32", fontIcon:"home"}], isShow:true, accountType:['P', 'H', 'I', 'T']  }
      ]
    }
  }

  const accounts = {
      usnerName:"Tabish Khan",
      accountNumber:"11223444",
      total: [
        { id: 1001, name: 'Prepaid Mobile', number:"9911704188", fontIcon: 'mobile', isShow:true, accountType:['P']},
        { id: 1002, name: 'Hybrid Mobile', number:"7827396007", fontIcon: 'mobile', isShow:true, accountType:['H']},
        { id: 1003, name: 'Internet', number:"8877445566", fontIcon: 'wifi', isShow:true, accountType:['I']},
        { id: 1004, name: 'TV Cable', number:"8899556633", fontIcon: 'television', isShow:true, accountType:['T']}
      ]
  }
class Home extends Component {
    // componentDidMount() {
    //     // this.props.getHomeContent(this.props.home.items.length);
    // }
    constructor(props) {
      super(props);
      this.state = { };
    }
  getInitialState (){
   return {
     selectedMobilePanelId: 1,
     selectedPanelAccountType:['P', 'H', 'I', 'T']
   }
 }

 changeFirst (newValue) {
   this.setState({
     selectedMobilePanelId: newValue.selectedPanelTabId,
     selectedPanelAccountType:newValue.selectedPanelAccountType
   });
 }


    render() {
        return (
            <div>
                <h1> This is home </h1>
                <UsageCard tabs={tabContent}/>
                <Tabs data={ data } selectedPanelAccountType={this.state.selectedPanelAccountType} changeFirst={this.changeFirst.bind(this)} />
                <MobileListPanel data={accounts} selectedPanelAccountType={this.state.selectedPanelAccountType} changeFirst={this.changeFirst.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    // getHomeContent: (pageOffset) => dispatch(getHomeContent(pageOffset)),
});

const HomeContainer = connect(mapStateToProps)(Home);
export default HomeContainer;
