export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},
    {label: 'Users', iconClasses: 'fa fa-th-list', children: [
        {label: 'List', route: 'layout/configuration'},
        {label: 'New User', route: 'layout/custom'},
    ]},
    {label: 'Ticket', iconClasses: 'fa fa-th-list', children: [
      {label: 'List', route: 'layout/configuration'},
      {label: 'New Ticket', route: 'layout/custom'},
    ]},
    {label: 'Users', iconClasses: 'fa fa-th-list', children: [
      {label: 'To view', route: 'layout/configuration'}
    ]}
  ]
};
