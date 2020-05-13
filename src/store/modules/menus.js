import pay from '@/assets/svg/pay.svg'
import rmb from '@/assets/svg/rmb.svg'
import umbrella from '@/assets/svg/umbrella.svg'
import chart from '@/assets/svg/chart.svg'
import cheque from '@/assets/svg/cheque.svg'
import folder from '@/assets/svg/folder.svg'
import percentage from '@/assets/svg/percentage.svg'
import shield from '@/assets/svg/shield.svg'
import account from '@/assets/svg/account.svg'
import gold from '@/assets/svg/gold.svg'
import bank from '@/assets/svg/bank.svg'
const state = {
    menuLists: [
    {
        id: 1,
        name: '菜单1',
        image: rmb,
        children:[{
            id: 11,
            name: '菜单1-1',
            image: cheque,
            children:[{
                id: 111,
                name: '菜单1-1-1',
                image: folder
            },
            {
                id: 112,
                name: '菜单1-1-2',
                image: percentage
            }]
        },
        {
            id: 12,
            name: '菜单1-1',
            image: cheque,
            children:[{
                id: 111,
                name: '菜单1-1-1',
                image: folder
            },
            {
                id: 112,
                name: '菜单1-1-2',
                image: percentage
            }]
        }]
    },
    {
        id: 2,
        name: '菜单2',
        image: pay,
        children:[{
            id: 21,
            name: '菜单2-1',
            image: shield
        },
        {
            id: 22,
            name: '菜单2-2',
            image: account
        }]
    },
    {
        id: 3,
        name: '菜单3',
        image: umbrella,
        children:[{
            id: 31,
            name: '菜单3-1',
            image: gold
        },
        {
            id: 32,
            name: '菜单3-2',
            image: bank
        }]
    },
    {
        id: 4,
        name: '菜单4',
        image: chart
    }]
}
const actions = {}
const mutations = {
    SET_MENU_LISTS (state, payload) {
        state.menuLists = payload
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
