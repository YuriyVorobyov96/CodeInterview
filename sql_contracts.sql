-- 1. Написать sql, получающий все статусы контракта с id=15 
-- 2. Написать алгоритм (псевдокод) добавляющий новый статус к контракту с id=15, только в том случае если текущий статус контракта (actuality = true) равен 3 (id = 3)

table contracts {
  id int,
  num varchar
}

table ref_statuses {
  id int,
  code varchar
}

table contracts_statuses {
  contract_id int,
  ref_status_id int,
  actuality boolean
}
