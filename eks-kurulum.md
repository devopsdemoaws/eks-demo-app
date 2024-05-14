
Öncelikle AWS CLI, kubectl ve eksctl'in bilgisayarımızda olduğundan emin olalım.

## Fargate kullanarak kurulum

```
eksctl create cluster --name <CLUSTER_ADI> --region <REGION> --fargate
```

## Clusterı silme

```
eksctl delete cluster --name <CLUSTER_ADI> --region <REGION>
```


