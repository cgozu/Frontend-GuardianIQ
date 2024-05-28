import {createStore} from "vuex";
import {User} from "@/securityContext/model/user.entity.js";
import  {UserService} from "@/securityContext/service/user.service.js";

const userService = new UserService();

export const store = createStore({

    state: {
        user: JSON.parse(localStorage.getItem('user')) || User
    },
    mutations: {
        setUser(state, user) {
            console.log('setUser mutation called with:', user);
            state.user = user;

            localStorage.setItem('user', JSON.stringify(user));
        },
        removeUser( state ) {
            state.user = User;
            localStorage.removeItem('user');
        }
    },
    actions: {
        async updateUser({ commit }, user) {
            try {
                const updatedUser = await userService.updateUser(user);
                console.log(updatedUser);
                commit('setUser', updatedUser);
            } catch (error) {
                console.error('Error al actualizar el usuario:', error);
                throw error;
            }
        }
    }
});
