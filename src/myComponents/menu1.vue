<template>
    <ul :class="menuCls">
        <template v-for="(item,index) in data">
            <li v-if="!item.children" @click="select(index,item.disabled)" :key="item.name" style="padding: 20px">
                <slot :data="item">
                    <i v-if="item.icon" :class="'anticon anticon-' + item.icon"/>
                    <a v-if="item.href" :href="item.href" style="display:inline" :target="item.target">{{item.name}}</a>
                    <span v-else>{{item.name}}</span>
                </slot>
            </li>
            <li v-else @mouseover="mouseTriggerOpen(item.disabled,index,true)" @mouseout="mouseTriggerOpen(item.disabled,index,false)" :key="item.name" style="padding: 20px">
                <div :title="item.name" @click="clickTriggerOpen(item.disabled,index)">
                    <span>
                      <slot :data="item" name="sub">
                        <i v-if="item.icon" :class="'anticon anticon-' + item.icon"/>
                        <span>{{item.name}}</span>
                      </slot>
                    </span>
                </div>
                {{item.expand}}
                <Menu v-if="item.children" :data="item.children" type="sub" v-show="item.expand" :level="level+1" :id="index">
                    {{item.children}}
                    <!-- slot不支持v-if 所以用:slot="$scopedSlots.default?'default':'hack'"来让没有使用slot的时候不会影响正常的渲染 -->
                    <template slot-scope="{data}" :slot="$scopedSlots.default?'default':'hack'">
                        {{11}}
                        <slot :data="data"/>
                    </template>
                    <template slot-scope="{data}" :slot="$scopedSlots.sub?'sub':'hack'">
                        {{22}}
                        <slot :data="data" name="sub"/>
                    </template>
                </Menu>
            </li>
        </template>
    </ul>
</template>

<script>
export default {
    name: "menu1",
    data: () => ({
        prefix: 'ant-menu',
        timer: [],
    }),
    props:{
        type: {
            type: String,
            default: 'root',
        },
        data: {
            type: Array,
            default: () => [],
        },
        expand: {
            type: Boolean,
            default: false,
        },
        inlineCollapsed: {
            type: Boolean,
            default: false,
        },
        theme: {
            type: String,
            default: 'light',
        },
        level: {
            type: Number,
            default: 1,
        }
    },
    computed: {
        menuCls () {
            return 0
            // if (this.type === 'root' || this.type === 'sub') {
            //     return 0
                // return [
                //     this.prefix,
                //     `${this.prefix}-${this.type}`,
                //     `${this.prefix}-${this.innerMode}`,
                //     {
                //         [`${this.prefix}-${this.theme}`]: this.type === 'root',
                //     },
                //     {
                //         [`${this.prefix}-inline-collapsed`]: this.type === 'root' && this.inlineCollapsed,
                //     },
                // ];
            // } else if (this.type === 'item-group-list') {
                // return `${this.prefix}-item-group-list`;
                // return 0
            // }
        },
        innerMode() {
            if (this.inlineCollapsed && this.mode === 'inline') return 'vertical';
            return this.mode;
        }
    },
    watch: {
        innerMode() {
            for (const item of this.data) {
                this.$set(item, 'expand', false);
            }
        },
    },
    created() {
        if (this.expand) {
            for (const item of this.data) {
                this.$set(item, 'expand', true);
            }
        } else {
            for (const item of this.data) {
                if (item.expand === undefined) {
                    this.$set(item, 'expand', false);
                }
            }
        }
    },
    methods: {
        select(index, disabled) {
            console.log('94:', index, disabled)
        },
        mouseTriggerOpen () {},
        mouseTriggerOpen1(index, disabled, val) {
            console.log(index, disabled, val)
        },
        setOpen(index, status = true) {
            this.$set(this.data[index], 'expand', status);
        },
        clickTriggerOpen(disabled, index) {
            console.log('128:', disabled, index, this.data[index].expand)
            // if (!disabled && this.innerMode === 'inline') {
            this.$emit('submenu-click', this.data[index]);
            this.setOpen(index, !this.data[index].expand);
            // }
            console.log('133:', disabled, index, this.data[index].expand)
        }
    }
}
</script>

<style scoped>

</style>
