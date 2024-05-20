
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
eksctl create nodegroup \ 
      --cluster=<your-eks-cluster-name> \ 
      --region=<your-region-code> \ 
      --name=<your-nodegroup-name> \ 
      --node-type=<instance-type> \ 
      --nodes=<desired-nodes> \
      --nodes-min=<minimum-num-of-nodes> \
      --nodes-max=<maximum-num-of-nodes> 
```
