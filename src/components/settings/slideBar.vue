<template>
    <div class="main_layout_slideBar">
        <div style="width: 100%; overflow-x: hidden;">
            <h4>Adminty Customizer</h4>
            <hr>
            <!--calc(100vh - 440px)-->
            <div style="padding: 10px; background-color: #f6f7fb; height: 90%; overflow: auto">
                <span>Live customizer with tons of options</span>
                <h5>Header Brand color</h5>
                <div class="main_layout_slideBar_header_brand_theme">
<!--                    <a @click="showHeadBrandTheme('blue')" class="main_layout_slideBar_header_brand_theme_common">-->
<!--                        <div class="head left">-->
<!--                            <div style="background-color: #007bff; width: 100%; height: 100%"></div>-->
<!--                        </div>-->
<!--                        <div class="main"></div>-->
<!--                    </a>-->
                    <a @click="showHeadBrandTheme('indigo')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #6610f2; width: 100%; height: 100%"></div>

                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadBrandTheme('purple')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #6f42c1; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadBrandTheme('pink')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #e83e8c; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <!--                <a @click="showHeadBrandTheme('red')" class="main_layout_slideBar_header_brand_theme_common">-->
                    <!--                    <div class="head left">-->
                    <!--                        <div style="background-color: #dc3545; width: 100%; height: 100%"></div>-->
                    <!--                    </div>-->
                    <!--                    <div class="main"></div>-->
                    <!--                </a>-->
                    <a @click="showHeadBrandTheme('orange')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #fd7e14; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <!--                <a @click="showHeadBrandTheme('yellow')" class="main_layout_slideBar_header_brand_theme_common">-->
                    <!--                    <div class="head left">-->
                    <!--                        <div style="background-color: #ffc107; width: 100%; height: 100%"></div>-->
                    <!--                    </div>-->
                    <!--                    <div class="main"></div>-->
                    <!--                </a>-->
                    <!--                <a @click="showHeadBrandTheme('green')" class="main_layout_slideBar_header_brand_theme_common">-->
                    <!--                    <div class="head left">-->
                    <!--                        <div style="background-color: #28a745; width: 100%; height: 100%"></div>-->
                    <!--                    </div>-->
                    <!--                    <div class="main"></div>-->
                    <!--                </a>-->
                    <a @click="showHeadBrandTheme('teal')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #20c997; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <!--                <a @click="showHeadBrandTheme('cyan')" class="main_layout_slideBar_header_brand_theme_common">-->
                    <!--                    <div class="head left">-->
                    <!--                        <div style="background-color: #17a2b8; width: 100%; height: 100%"></div>-->
                    <!--                    </div>-->
                    <!--                    <div class="main"></div>-->
                    <!--                </a>-->
                    <a @click="showHeadBrandTheme('white')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #fff; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <!--                <a @click="showHeadBrandTheme('gray')" class="main_layout_slideBar_header_brand_theme_common">-->
                    <!--                    <div class="head left">-->
                    <!--                        <div style="background-color: #6c757d; width: 100%; height: 100%"></div>-->
                    <!--                    </div>-->
                    <!--                    <div class="main"></div>-->
                    <!--                </a>-->
                    <!--                <a @click="showHeadBrandTheme('gray-dark')" class="main_layout_slideBar_header_brand_theme_common">-->
                    <!--                    <div class="head left">-->
                    <!--                        <div style="background-color: #343a40; width: 100%; height: 100%"></div>-->
                    <!--                    </div>-->
                    <!--                    <div class="main"></div>-->
                    <!--                </a>-->
                    <a @click="showHeadBrandTheme('primary')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #007bff; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadBrandTheme('secondary')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #6c757d; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadBrandTheme('success')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #28a745; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadBrandTheme('info')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #17a2b8; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadBrandTheme('warning')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #ffc107; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadBrandTheme('danger')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #dc3545; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadBrandTheme('light')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #f8f9fa; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadBrandTheme('dark')" class="main_layout_slideBar_header_brand_theme_common">
                        <div class="head left">
                            <div style="background-color: #343a40; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                </div>

                <h5>Header color</h5>
                <div class="main_layout_slideBar_header_theme">
<!--                    <a @click="showHeadTheme('blue')" class="main_layout_slideBar_header_theme_common">-->
<!--                        <div class="head right">-->
<!--                            <div style="background-color: #007bff; height: 100%"></div>-->
<!--                        </div>-->
<!--                        <div class="main"></div>-->
<!--                    </a>-->
                    <a @click="showHeadTheme('indigo')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #6610f2; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadTheme('purple')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #6f42c1; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadTheme('pink')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #e83e8c; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <!--                <a @click="showHeadTheme('red')" class="main_layout_slideBar_header_theme_common">-->
                    <!--                    <div class="head right">-->
                    <!--                        <div style="background-color: #dc3545; width: 100%; height: 100%"></div>-->
                    <!--                    </div>-->
                    <!--                    <div class="main"></div>-->
                    <!--                </a>-->
                    <a @click="showHeadTheme('orange')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #fd7e14; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <!--                <a @click="showHeadTheme('yellow')" class="main_layout_slideBar_header_theme_common">-->
                    <!--                    <div class="head right">-->
                    <!--                        <div style="background-color: #ffc107; width: 100%; height: 100%"></div>-->
                    <!--                    </div>-->
                    <!--                    <div class="main"></div>-->
                    <!--                </a>-->
                    <!--                <a @click="showHeadTheme('green')" class="main_layout_slideBar_header_theme_common">-->
                    <!--                    <div class="head right">-->
                    <!--                        <div style="background-color: #28a745; width: 100%; height: 100%"></div>-->
                    <!--                    </div>-->
                    <!--                    <div class="main"></div>-->
                    <!--                </a>-->
                    <a @click="showHeadTheme('teal')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #20c997; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <!--                <a @click="showHeadTheme('cyan')" class="main_layout_slideBar_header_theme_common">-->
                    <!--                    <div class="head right">-->
                    <!--                        <div style="background-color: #17a2b8; width: 100%; height: 100%"></div>-->
                    <!--                    </div>-->
                    <!--                    <div class="main"></div>-->
                    <!--                </a>-->
                    <a @click="showHeadTheme('white')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #fff; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <!--                <a @click="showHeadTheme('gray')" class="main_layout_slideBar_header_theme_common">-->
                    <!--                    <div class="head right">-->
                    <!--                        <div style="background-color: #6c757d; width: 100%; height: 100%"></div>-->
                    <!--                    </div>-->
                    <!--                    <div class="main"></div>-->
                    <!--                </a>-->
                    <!--                <a @click="showHeadTheme('gray-dark')" class="main_layout_slideBar_header_theme_common">-->
                    <!--                    <div class="head right">-->
                    <!--                        <div style="background-color: #343a40; width: 100%; height: 100%"></div>-->
                    <!--                    </div>-->
                    <!--                    <div class="main"></div>-->
                    <!--                </a>-->
                    <a @click="showHeadTheme('primary')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #007bff; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadTheme('secondary')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #6c757d; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadTheme('success')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #28a745; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadTheme('info')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #17a2b8; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadTheme('warning')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #ffc107; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadTheme('danger')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #dc3545; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadTheme('light')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #f8f9fa; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                    <a @click="showHeadTheme('dark')" class="main_layout_slideBar_header_theme_common">
                        <div class="head right">
                            <div style="background-color: #343a40; width: 100%; height: 100%"></div>
                        </div>
                        <div class="main"></div>
                    </a>
                </div>

                <h5>Main layouts</h5>
                <div class="main_layout_slideBar_menu_theme">
                    <a @click="showMenuTheme('white')" class="main_layout_slideBar_menu_theme_common">
                        <div class="head"/>
                        <div class="main"/>
                    </a>
                    <a @click="showMenuTheme('black')" class="main_layout_slideBar_menu_theme_common">
                        <div class="head"/>
                        <div style="display: flex; flex-direction: row">
                            <div style="height: 30px; background-color: rgb(64, 78, 103); width: 30%;"></div>
                            <div style="height: 30px; background-color: rgb(246, 247, 251); width: 70%;"/>
                        </div>
                    </a>
                    <a @click="showMenuTheme('primary')" class="main_layout_slideBar_menu_theme_common">
                        <div class="head"/>
                        <div style="display: flex; flex-direction: row">
                            <div style="height: 30px; background-color: #0177D5FF; width: 30%;"></div>
                            <div style="height: 30px; background-color: rgb(246, 247, 251); width: 70%;"/>
                        </div>
                    </a>
                    <a @click="showMenuTheme('info')" class="main_layout_slideBar_menu_theme_common">
                        <div class="head"/>
                        <div style="display: flex; flex-direction: row">
                            <div style="height: 30px; background-color: rgba(8,155,171,1); width: 30%;"></div>
                            <div style="height: 30px; background-color: rgb(246, 247, 251); width: 70%;"/>
                        </div>
                    </a>
                </div>

                <h5>menu style</h5>
                <div>
                    <a @click="showMainItemTheme('rectangle')" class="main_layout_slideBar_menuItem_common">
                        <div style="margin-left: 10% ;margin-top: 20%; width: 80% ;height: 20%; background-color: black"></div>
                    </a>
                    <a @click="showMainItemTheme('roundedRectangle')" class="main_layout_slideBar_menuItem_common">
                        <div style="margin-left: 10% ;margin-top: 20%; width: 80% ;height: 20%; border-radius: 20px; background-color: black"></div>
                    </a>
                    <a @click="showMainItemTheme('halfRoundedRectangle')" class="main_layout_slideBar_menuItem_common">
                        <div style="margin-left: 10% ;margin-top: 20%; width: 80% ;height: 20%; border-radius: 30% 0; background-color: black"></div>
                    </a>
                    <!--<el-color-picker v-model="color" size="small" @active-change="activeColorChange"/>-->
                </div>

                <h5>menu color</h5>
                <div>
<!--                    <a @click="showMainItemColor('blue')" class="main_layout_slideBar_menuItem_color">-->
<!--                        <div style="background-color: #007bff; width: 100%; height: 100%"></div>-->
<!--                    </a>-->
                    <a @click="showMainItemColor('indigo')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #6610f2; width: 100%; height: 100%"></div>
                    </a>
                    <a @click="showMainItemColor('purple')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #6f42c1; width: 100%; height: 100%"></div>
                    </a>
                    <a @click="showMainItemColor('pink')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #e83e8c; width: 100%; height: 100%"></div>
                    </a>
                    <!--                <a @click="showMainItemColor('red')" class="main_layout_slideBar_menuItem_color">-->
                    <!--                    <div style="background-color: #dc3545; width: 100%; height: 100%"></div>-->
                    <!--                </a>-->
                    <a @click="showMainItemColor('orange')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #fd7e14; width: 100%; height: 100%"></div>
                    </a>
                    <!--                <a @click="showMainItemColor('yellow')" class="main_layout_slideBar_menuItem_color">-->
                    <!--                    <div style="background-color: #ffc107; width: 100%; height: 100%"></div>-->
                    <!--                </a>-->
                    <!--                <a @click="showMainItemColor('green')" class="main_layout_slideBar_menuItem_color">-->
                    <!--                    <div style="background-color: #28a745; width: 100%; height: 100%"></div>-->
                    <!--                </a>-->
                    <a @click="showMainItemColor('teal')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #20c997; width: 100%; height: 100%"></div>
                    </a>
                    <!--                <a @click="showMainItemColor('cyan')" class="main_layout_slideBar_menuItem_color">-->
                    <!--                    <div style="background-color: #17a2b8; width: 100%; height: 100%"></div>-->
                    <!--                </a>-->
                    <a @click="showMainItemColor('white')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #fff; width: 100%; height: 100%"></div>
                    </a>
                    <!--                <a @click="showMainItemColor('gray')" class="main_layout_slideBar_menuItem_color">-->
                    <!--                    <div style="background-color: #6c757d; width: 100%; height: 100%"></div>-->
                    <!--                </a>-->
                    <!--                <a @click="showMainItemColor('gray-dark')" class="main_layout_slideBar_menuItem_color">-->
                    <!--                    <div style="background-color: #343a40; width: 100%; height: 100%"></div>-->
                    <!--                </a>-->
                    <a @click="showMainItemColor('primary')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #007bff; width: 100%; height: 100%"></div>
                    </a>
                    <a @click="showMainItemColor('secondary')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #6c757d; width: 100%; height: 100%"></div>
                    </a>
                    <a @click="showMainItemColor('success')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #28a745; width: 100%; height: 100%"></div>
                    </a>
                    <a @click="showMainItemColor('info')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #17a2b8; width: 100%; height: 100%"></div>
                    </a>
                    <a @click="showMainItemColor('warning')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #ffc107; width: 100%; height: 100%"></div>
                    </a>
                    <a @click="showMainItemColor('danger')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #dc3545; width: 100%; height: 100%"></div>
                    </a>
                    <a @click="showMainItemColor('light')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #f8f9fa; width: 100%; height: 100%"></div>
                    </a>
                    <a @click="showMainItemColor('dark')" class="main_layout_slideBar_menuItem_color">
                        <div style="background-color: #343a40; width: 100%; height: 100%"></div>
                    </a>
                </div>

                <h5>table styles</h5>
                <div class="main_layout_slideBar_table_theme">
<!--                    <a @click="showTableTheme('blue')" class="main_layout_slideBar_table_theme_common">-->
<!--                        <div class="head" style="background-color: #007bff"/>-->
<!--                        <div class="main">-->
<!--                            <div style="border-bottom: 1px solid #D8D8D8"></div>-->
<!--                            <div style="border-bottom: 1px solid #D8D8D8"></div>-->
<!--                            <div style="border-bottom: 1px solid #D8D8D8"></div>-->
<!--                        </div>-->
<!--                    </a>-->
                    <a @click="showTableTheme('indigo')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #6610f2"/>
                        <div class="main">
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('purple')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #6f42c1"/>
                        <div class="main">
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('pink')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #e83e8c"/>
                        <div class="main">
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('orange')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #fd7e14"/>
                        <div class="main">
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('teal')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #20c997"/>
                        <div class="main">
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('white')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #fff"/>
                        <div class="main">
                            <div style="border-top: 1px solid #D8D8D8; border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('primary')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #007bff"/>
                        <div class="main">
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('secondary')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #6c757d"/>
                        <div class="main">
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('success')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #28a745"/>
                        <div class="main">
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('info')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #17a2b8"/>
                        <div class="main">
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('warning')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #ffc107"/>
                        <div class="main">
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('danger')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #dc3545"/>
                        <div class="main">
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('light')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #f8f9fa"/>
                        <div class="main">
                            <div style="border-top: 1px solid #D8D8D8; border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                    <a @click="showTableTheme('dark')" class="main_layout_slideBar_table_theme_common">
                        <div class="head" style="background-color: #343a40"/>
                        <div class="main">
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                            <div style="border-bottom: 1px solid #D8D8D8"></div>
                        </div>
                    </a>
                </div>
            </div>
            <hr>

        </div>
        <div class="main_layout_slideBar_switch" @click="showSlideBar()">
            <i class="el-icon-setting setting" v-if="isShowSetting"/>
            <i class="el-icon-close close" v-else/>
        </div>
    </div>
</template>

<script>
export default {
    name: "slideBar",
    data() {
        return {
            isShowSetting: true,
            isShowSlideBar: false,
            color: '#409EFF'
        }
    },
    methods:{
        showSlideBar(){
            this.isShowSlideBar = !this.isShowSlideBar
            if(this.isShowSlideBar === true){
                this.isShowSetting = false
            } else {
                this.isShowSetting = true
            }
            // this.$store.commit('upDate', {themeType: type});
            window.document.documentElement.setAttribute( "is_show_slide_bar", this.isShowSlideBar );
        },
        activeColorChange(menuItemBackGround){
            console.log(menuItemBackGround);
            window.document.documentElement.setAttribute( "main_layout_menuItem_backGround", menuItemBackGround );
            console.log(window.document.documentElement.attributes.getNamedItem('main_layout_menuItem_backGround'))
        },
        showHeadBrandTheme(mainLayoutHeadBrandColor){
            window.document.documentElement.setAttribute( "main_layout_head_brand_color", mainLayoutHeadBrandColor );
        },
        showHeadTheme(mainLayoutHeadColor){
            window.document.documentElement.setAttribute( "main_layout_head_color", mainLayoutHeadColor );
        },
        showMenuTheme(mainLayoutMenuColor){
            window.document.documentElement.setAttribute( "main_layout_menu_color", mainLayoutMenuColor );
        },
        showTableTheme(mainLayoutTableHeadColor){
            window.document.documentElement.setAttribute( "main_layout_table_style", mainLayoutTableHeadColor);
        },
        showMainItemTheme(menuItemBorderRadius){
            window.document.documentElement.setAttribute( "main_layout_menuItem_style", menuItemBorderRadius);
        },
        showMainItemColor(headerLeft){
            window.document.documentElement.setAttribute( "main_layout_head_brand_color", headerLeft);
        }
    }
}
</script>

<style scoped>
    @-webkit-keyframes rotate{
        from{-webkit-transform: rotate(0deg)}
        to{-webkit-transform: rotate(360deg)}
    }
    @-moz-keyframes rotate{
        from{-moz-transform: rotate(0deg)}
        to{-moz-transform: rotate(359deg)}
    }
    @-o-keyframes rotate{
        from{-o-transform: rotate(0deg)}
        to{-o-transform: rotate(359deg)}
    }
    @keyframes rotate{
        from{transform: rotate(0deg)}
        to{transform: rotate(359deg)}
    }
    .setting{
        color: #fafafa;
        font-size: 1.6em;
        -webkit-transition-property: -webkit-transform;
        -webkit-transition-duration: 1s;
        -moz-transition-property: -moz-transform;
        -moz-transition-duration: 1s;
        -webkit-animation: rotate 3s linear infinite;
        -moz-animation: rotate 3s linear infinite;
        -o-animation: rotate 3s linear infinite;
        animation: rotate 2s linear infinite;
    }
    .close{
        color: #fafafa;
        font-size: 1.6em;
    }

</style>
