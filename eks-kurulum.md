
Öncelikle AWS CLI, kubectl ve eksctl'in bilgisayarımızda olduğundan emin olalım.

## Fargate kullanarak kurulum

```
eksctl create cluster --name <CLUSTER_ADI> --region <REGION>
```

## Clusterı silme

```
eksctl delete cluster --name <CLUSTER_ADI> --region <REGION>
```

## NodeGroup ekleme

```
eksctl create fargateprofile \
  --cluster <CLUSTER_ADI> \
  --namespace eks-app-demo \
  --name app-demo \
  --region=<REGION>
```
