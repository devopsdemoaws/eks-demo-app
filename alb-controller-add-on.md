# How to setup alb add on

```
eksctl utils associate-iam-oidc-provider --cluster <your-cluster-name>  --region <region> --approve  
```

Download IAM policy

```
curl -O https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.5.4/docs/install/iam_policy.json
```

Create IAM Policy

```
aws iam create-policy \
    --policy-name AWSLoadBalancerControllerIAMPolicy \
    --policy-document file://iam_policy.json
```

Create IAM Role

```
eksctl create iamserviceaccount \
  --region=<region> \
  --cluster=<your-cluster-name> \
  --namespace=kube-system \
  --name=aws-load-balancer-controller-1 \
  --role-name AmazonEKSLoadBalancerControllerRole \
  --attach-policy-arn=arn:aws:iam::675303913885:policy/AWSLoadBalancerControllerIAMPolicy \
  --approve    
```

## Deploy ALB controller

Add helm repo

```
helm repo add eks https://aws.github.io/eks-charts
```

Update the repo

```
helm repo update eks
```

Install

```
helm install aws-load-balancer-controller eks/aws-load-balancer-controller -n kube-system \
    --set clusterName=<your_cluster_name> \
    --set serviceAccount.create=false \
    --set region=<region> \
    --set vpcId=<vpc-id> \
    --set serviceAccount.name=aws-load-balancer-controller-1
```

Verify that the deployments are running.

```
kubectl get deployment -n kube-system aws-load-balancer-controller-1
```


