###  Cluster olusturma   ###

eksctl create cluster --name demo --region eu-central-1 --fargate

###  Node Ekleme  ###

eksctl create fargateprofile \
  --cluster demo \
  --namespace eks-app-demo \ 
  --region eu-central-1 

### concnect cluster ###

aws eks update-kubeconfig \
  --region eu-central-1 \
  --name demo


###  Olusturacagimiz ServiceAccountu tum nodelarin gormesini saglama ###

eksctl utils associate-iam-oidc-provider --cluster demo --region eu-central-1 --approve  

### Awsden policiy template  ###

curl -O https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.5.4/docs/install/iam_policy.json

###  Gerekli policy olusturma  ###

aws iam create-policy \
    --policy-name AWSLoadBalancerControllerIAMPolicy \
    --policy-document file://iam_policy.json

###  Policyi kullanarak ServiceAccount olusturma  ###

eksctl create iamserviceaccount \
  --region=eu-central-1 \
  --cluster=demo \
  --namespace=kube-system \
  --name=aws-load-balancer-controller-1 \
  --role-name AmazonEKSLoadBalancerControllerRole \
  --attach-policy-arn=arn:aws:iam::675303913885:policy/AWSLoadBalancerControllerIAMPolicy \
  --approve    

###  ApplicationLoadBalancer Add-On ekleme  ###

helm repo add eks https://aws.github.io/eks-charts

helm repo update eks


helm install aws-load-balancer-controller eks/aws-load-balancer-controller -n kube-system \
    --set clusterName=demo \
    --set serviceAccount.create=false \
    --set region=eu-central-1 \
    --set vpcId=vpc-00b39b7773750b2dc \
    --set serviceAccount.name=aws-load-balancer-controller-1
    
