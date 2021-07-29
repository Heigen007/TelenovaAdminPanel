export default [
  {
    header: 'Promo',
    icon: 'ClipboardIcon',
    children: [
      {
        title: 'All promo`s',
        route: { name: 'AllPromo`s', params: { id: 1 } },
      },
      {
        title: 'Create new promo',
        route: { name: 'NewPromo', params: { id: 1 } },
      },
      {
        title: 'Promocode page',
        route: { name: 'NewPromocode'},
      },
    ],
  },
]
