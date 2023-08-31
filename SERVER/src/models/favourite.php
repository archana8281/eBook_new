<?php

namespace Archana\Elearning\Model;

class Favourite extends Model
{
  private int|null $id = null;
  private string $path;
  private $type;

  public \Doctrine\DBAL\Query\QueryBuilder $queryBuilder;

  public function __construct()
  {
    parent::__construct();
    $this->queryBuilder = $this->conn->createQueryBuilder();
  }

  public function fetchList()
  {
    return $this->queryBuilder->select('id', 'path')
      ->from('favourite')
      ->fetchAllAssociative();
  }
}
