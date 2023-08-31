<?php

namespace Archana\Elearning\Model;

class Content extends Model
{

    private int|null $id = null;
    private int $Cid;
    private string $subject;
    private string $type;
    private $path;

    public \Doctrine\DBAL\Query\QueryBuilder $queryBuilder;

    public function __construct()
    {
        parent::__construct();
        $this->queryBuilder = $this->conn->createQueryBuilder();
    }

    public function fetchData($subject)
    {
        return $this->queryBuilder->select('id', 'Cid', 'subject', 'path')
            ->from('content')
            ->where('subject = ?')
            ->setParameter(0, $subject)
            ->executeQuery()
            ->fetchAllAssociative();
    }
}
